import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const app =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert({
          projectId: "minonooo-f0375",
          clientEmail:
            "firebase-adminsdk-fbsvc@minonooo-f0375.iam.gserviceaccount.com",
          privateKey:
            "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMCP3agLD/s7lf\nHh47kzQIGGgymhVhBwE9y7/mKreO1dNN5vBMcHoH3F5WtXMsMK1/yDlxE6IC3Aoq\nHwwGl+TFTx1ctXIIBAtNVGkmc/lZnBKx3VWygFfdB8MybPJxabn0fraNRJEUz9Mg\n2w6l9CuZalwFAtTm1ZeClDHO2YYoTarboxQNPk/XYmdGH2FiB4zzCEn7i5X8qpsE\nEx/ToK1Mt5SfKxSfw74n0oGVD+goitBCq2QdQhMp3+jXftu5nz691g2DA4024GPN\nq4UIWOM8AUXXaXbcN3RYVWeFVwpCsG/8MAM1wUut3u9qdxP6Mz81iQbsaB09OWvX\n/jk5/17/AgMBAAECggEAObYG8ILy7x6hecrOyNycp+1vG9OWlfsuDsqmlnPqXCpR\nQBy50bbVA+JU2sVC5uZUyoG48poVvbnzUnKjISB+PrahMjDxAs6v3bm48AkBrWV9\n6uF9zOfJziTB1ElEDWt2IIYMM+IbLImNyE+fFNOxGDPWIpaNKWjDXSQ39rh86qSj\ndl5ag5BINvl4JCphnMvS/hmvIfFinnG8HRa7cUJAjypIxciv4mouzuq1+ZgzJYsL\n4JZD1ziCoTrXLo5IwQ3WUVDfJXp7/FBc0JVC1RW6AKaxQfdwj/234vI9m9GJT7pg\ntrrCzl0h8EQMD2gT3u7g3Xw9ZqJWTweNnk1wp6xJqQKBgQDCGRkpNZdUzcRi+UbL\nfwLol2ZpOwLDtB9sFIrMXK3AVpP9lncUcznUsTvjVwWOiQhQzDKlyK7RWPsOPJjj\n+yzx8TY8w5srkODg778AYHV5azFCt/NSHCfmaf2u0F+FjYZwoldW6dsWc7yC1xpq\nOH53q7B8Q0JWC+6ZaCLWfkHZgwKBgQC4sf3IDse2G9jY/0esbK/Gbuei3LfUHUMm\n/CsomCKrbxMNB2tQh70ODHH3a8WMpbdawbf8/xY/uUdssNE3fe5xi5nn8oJFlcSV\nT+2uGequsOlR94D2eRWcutiB+BJvgvqySos65YseTgK5u/6Fk+s0tNHQKDAhA9+b\nSLEmksj31QKBgQCj459cLXUXVRtS2trNLvScwmHlzr750liJ4RqFjmfjtPcGs4re\nyKB3GCPSRQNbJBfSaWkGlNoPyItLrR0Hu2lq7Np4Gk4mThGjvKvRPKFUoY8Zn8sj\ndMS4CJz8g9N0KFjxOBJ5P8MPRTBSZiBWulcG4wCFHCGiGDcib0yjQj6F0wKBgDVM\nJ8/zc+45WvpDsIsxUggROQbmaqXrS9WUL2Anhtmx0+2OlolGomfLb5fWoctUhvTJ\nsi5v7hu1e8cBv14kGQrrHh6w/KbX8UKlLhFvqSmAI9Rjd/OoPXRc9t2KmMdVJMMO\nf98fHmZAXMj8VxZ0+Qrcoy9OaZUdaQmGkJhxA02BAoGALBG23zPQaYOlrH3GpVgu\nA18ru92UZUJLpZLrxzazlp5CueMYOVjnBz1X6U2Npij/6R0w5/YIDh4Rv3SFU40D\nQwTmQl9HgiPa7iScvctpf7orYN9xSqk4F+mNrqlOO7ar1n4KqG/aX+HhCe5UceP9\nPi1HMTT3CWuJsq9AsYH4FRQ=\n-----END PRIVATE KEY-----\n".replace(
              /\\n/g,
              "\n"
            ),
        }),
      });

export const adminDb = getFirestore(app);
