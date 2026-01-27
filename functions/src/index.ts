import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
admin.initializeApp();

export const setDefaultUserRole = functions.auth
  .user()
  .onCreate(async (user) => {
    try {
      let role = "user";

      if (user.email === "urievoleg94@gmail.com") {
        role = "admin";
      }

      // Устанавливаем кастомные claims
      await admin.auth().setCustomUserClaims(user.uid, { role });

      functions.logger.info(
        `Пользователю ${user.email} назначена роль: ${role}`,
      );
    } catch (error) {
      functions.logger.error("Ошибка при установке роли:", error);
    }
  });
