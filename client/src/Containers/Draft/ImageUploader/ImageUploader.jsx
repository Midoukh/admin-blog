import React, { useState } from "react";
import UploadFile from "../../../Components/UploadFile/UploadFile";

const ImageUploader = ({ getMainImage }) => {
	const [avatarUpdated, setAvatarUpdated] = useState(false);
	const [picture, setPicture] = useState("");

	const imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setPicture((prev) => (prev = reader.result));
				getMainImage(reader.result)
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	return (
		<div className="imgHolder">
			{picture && (
				<img src={picture} alt="image preview" className="img" />
			)}
			<div>
				<input
					style={{ display: "none" }}
					className="file"
					type="file"
					accept="image/*"
					name="image-upload"
					id="input"
					onChange={imageHandler}
					required
				/>
				<label htmlFor="input">
					<UploadFile />
				</label>
			</div>
		</div>
	);
};

export default ImageUploader;
