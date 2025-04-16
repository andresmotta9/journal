export const fileUpload = async (file) => {
  if (!file) throw new Error('There is not a file to uopload');
  const cloudUrl = 'https://api.cloudinary.com/v1_1/de3yclfip/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, { method: 'POST', body: formData });

    if (!resp.ok) throw new Error('The image could not be uploaded');

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
