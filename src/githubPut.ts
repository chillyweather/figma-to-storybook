const accessToken = "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";
const owner = "chillyweather";
const repo = "tidy-test";
const filePath = "README.md";
const newCode = 'console.log("Hello, world!");';

export async function updateGitHubFile() {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const sha = data.sha;
    const encodedContent = btoa(newCode);

    const updateResponse = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: filePath,
        message: "Update file via Figma plugin",
        content: encodedContent,
        sha: sha,
      }),
    });

    if (updateResponse.ok) {
      console.log("File updated successfully.");
    } else {
      console.error(
        "Failed to update file:",
        updateResponse.status,
        updateResponse.statusText
      );
    }
  } catch (error: any) {
    console.error("Error:", error.message);
  }
}
