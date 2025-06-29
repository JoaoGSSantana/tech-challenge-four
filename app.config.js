import "dotenv/config";

import { z } from "zod";

const schema = z.object({
  API_BASE_URL: z.string().url(),
  APP_ENV: z.enum(["development", "production"]),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "Erro ao validar as variáveis de ambiente: ",
    parsed.error.flatten().fieldErrors,
  );

  throw new Error("Variáveis de ambiente inválidas");
}

export default {
  expo: {
    name: "tech-challenge-four",
    slug: "tech-challenge-four",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      ...parsed.data,
    },
  },
};
