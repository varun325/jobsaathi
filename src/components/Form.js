import React, { useState } from "react";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { InputLabel } from "@mui/material";
import {
  jobStatusOptions,
  stackOptions,
  stackTypeOptions,
  careerLevelOptions,
} from "../constants/options";
import { saveToStorage } from "../helpers/storeOperations";
const { ipcRenderer } = window.require("electron");

function Form() {
  const [formData, setFormData] = useState({
    jobId: "",
    companyName: "",
    jobName: "",
    careerLevel: "",
    applicationType: "",
    stackType: "",
    stack: "",
    jobStatus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "stackType") {
      // Only reset the stack field when changing the "Stack Type"
      setFormData({
        ...formData,
        [name]: value,
        stack: "", // Reset the stack field
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleStackChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box p={2}>
      <Paper elevation={3}>
        <Box p={2}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Job ID"
                  type="text"
                  name="jobId"
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company Name"
                  type="text"
                  name="companyName"
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Job Name"
                  type="text"
                  name="jobName"
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid container spacing={2} style={{ marginLeft: 1 }}>
                <Grid item xs={12} sm={2}>
                  <InputLabel>Career Level</InputLabel>
                  <Select
                    label="Career Level"
                    name="careerLevel"
                    value={formData.careerLevel}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    {careerLevelOptions.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <InputLabel>Application Type</InputLabel>
                  <Select
                    label="Application Type"
                    name="applicationType"
                    value={formData.applicationType}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    <MenuItem value="referral">Referral</MenuItem>
                    <MenuItem value="direct">Direct</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <InputLabel>Stack Type</InputLabel>
                  <Select
                    label="Stack Type"
                    name="stackType"
                    value={formData.stackType}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    {stackTypeOptions.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                {stackOptions[formData.stackType] && (
                  <Grid item xs={12} sm={2}>
                    <InputLabel>Stack</InputLabel>
                    <Select
                      label="Stack"
                      name="stack"
                      value={formData.stack}
                      onChange={handleStackChange}
                      fullWidth
                    >
                      {stackOptions[formData.stackType].map((stack) => (
                        <MenuItem key={stack} value={stack}>
                          {stack}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                )}
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Job Status</InputLabel>
                <Select
                  label="Job Status"
                  name="jobStatus"
                  value={formData.jobStatus}
                  onChange={handleInputChange}
                  fullWidth
                >
                  {jobStatusOptions.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    // console.log(JSON.stringify(formData, null, 2));
                    saveToStorage(formData, ipcRenderer);
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}

export default Form;
