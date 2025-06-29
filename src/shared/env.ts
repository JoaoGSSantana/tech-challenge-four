import Constants from "expo-constants";
import { z } from "zod";

const envSchema = z.object({
  API_BASE_URL: z.string().url(),
  APP_ENV: z.enum(["development", "production"]),
});

const rawEnv = Constants.expoConfig?.extra || Constants.expoConfig?.extra || {};

export const env = envSchema.parse(rawEnv);
