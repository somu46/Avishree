import axios from "axios";

const fetchPhotos = async () => {
    // const apiKey = process.env.REACT_APP_API_KEY;
    const folderId = process.env.REACT_APP_FOLDER_ID;
const auth='ya29.a0AeDClZDC2e-anzCT0D-RTvQwy1vCR_AyKJ8Pq8XIMBSNq7yMsYD69BDNlcVsZRmcTPymJJbShNW8Uyz0zsRosw-bEIGMHPgKmTBcn-APhKRR8BYtdV5M4tFABoTj6kLcN8_ehOgSlkJdm-6yiuqAw-spRlaESu8iCSLztv3caCgYKAQMSARMSFQHGX2MiTRIWrYaAyVs4SMiI8oxwhQ0175'
    try {
        // const response = await axios.get(
        //     `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,thumbnailLink,webContentLink)`
        // );
        const response = await axios.get(
            `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,thumbnailLink,webContentLink)`,
            {
                headers: {
                    Authorization: `Bearer ${auth}`,
                },
            }
        );

        const files = response.data.files || [];
        console.log("Files fetched: ", files);

        const formattedPhotos = files.map(file => ({
            original: `https://drive.google.com/uc?export=view&id=${file.id}`,
            thumbnail: file.thumbnailLink || `https://drive.google.com/uc?export=view&id=${file.id}`,
            alt: file.name || "Untitled Image",
        }));

        return formattedPhotos;
    } catch (error) {
        console.error("Error fetching photos:", error);
        return [];
    }
};

export default fetchPhotos;
