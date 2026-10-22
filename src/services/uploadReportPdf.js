
import cloudinary from "../lib/cloudinary.js";

export async function uploadReportPdf(filePath, reportId) {
  const result = await cloudinary.uploader.upload(filePath, {
    resource_type: "raw",
    public_id: `business-reports/${reportId}.pdf`,
    overwrite: true,
    invalidate: true,
  });

  return result.secure_url;
}
