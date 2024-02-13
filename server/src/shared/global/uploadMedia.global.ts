import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
interface UploadOptions {
  public_id?: string;
  overwrite?: boolean;
  invalidate?: boolean;
}

export function upload(
  file: string,
  options?: UploadOptions
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file, options,
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
  });
}
