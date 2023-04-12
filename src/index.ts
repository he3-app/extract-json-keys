import { textTransformTool } from "@he3-kit/utils";

const EXAMPLE_STR = `{
    "abc": "bcd",
    "hello": "world"
}
`;

const extractKeys = (str) => {
  try {
    const jsonObj = JSON.parse(str);
    return Object.keys(jsonObj).join(",");
  } catch {}
};

export default textTransformTool({
  inputHandler: extractKeys,
  sampleData: EXAMPLE_STR,
});
