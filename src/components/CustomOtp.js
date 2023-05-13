import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export const CustomOtp = (props) => {
	const { handleChange, value, hasErrored, errorMsz } = props;

	return (
		<>
			<OtpInput
				value={value}
				onChange={handleChange}
				numInputs={6}
				isInputNum={true}
				hasErrored={hasErrored}
				errorStyle="error"
				placeholder={"xxxxxx"}
				containerStyle={{ justifyContent: "center" }}
				separator={<span style={{ margin: "0 6px" }}></span>}
				inputStyle={{
					width: 50,
					height: 50,
					borderRadius: 10,
					fontSize: 20,
					border: "none",
					backgroundColor: "#ECECEC",
				}}
			/>

			{hasErrored && (
				<Typography
					variant="body1"
					className="errorDom"
					component="span"
					style={{ color: "rgb(211, 47, 47)", fontSize: 12 }}
				>
					<Box mt={2}>{errorMsz}</Box>
				</Typography>
			)}
		</>
	);
};
