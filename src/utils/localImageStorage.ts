export async function uploadImageToServerAndGitHub(fileOrData: any): Promise<string> {
  return "";
}

export async function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}
