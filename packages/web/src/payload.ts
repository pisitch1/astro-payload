// src/payload.ts
import { getPayload as getPayloadLib } from "payload";
import config from "../../cms/src/payload.config";

// Initialize Payload
export const getPayload = async () => {
  return getPayloadLib({ config });
};

export default getPayload;
