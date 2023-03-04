import filetype from "magic-bytes.js";

const detect = (bytes) => {
  const extensions = filetype.filetypeextension(bytes);
  return extensions.filter((e) => e != "")[0];
};

export { detect };
export default detect;
