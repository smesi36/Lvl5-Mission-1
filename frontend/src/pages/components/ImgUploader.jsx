import styles from "./ImgUploader.module.css";

export default function ImgUploader({ setImage, setFile, setTypeResult, setBrandResult }) {
  function handleChange(event) {
    const file = event.target.files[0];
    //console log file object being uploaded:
    console.log(`Selected file ${file}`); 

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      console.log(`Generated URL for preview: ${previewUrl}`);
      setTypeResult(''); //clears previous result
      setBrandResult('');
      setImage(previewUrl); //for img preview
      setFile(file); //for sending to backend
    }
  }

  return (
    <label className={styles.uploadBtn}>
      Upload Vehicle Image
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </label>
  );
}
