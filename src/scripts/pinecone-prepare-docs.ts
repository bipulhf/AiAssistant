import { getChunkedDocsFromPDF } from "@/lib/pdf-loader";
import { embedAndStoreDocs } from "@/lib/vector-store";
import { getPineconeClient } from "@/lib/pinecone-client";

(async () => {
    try {
        const pineconeClient = await getPineconeClient();
        console.log("Preparing chunks from PDF file");
        const docs = await getChunkedDocsFromPDF();
        console.log(`Loading ${docs.length} chunks into pinecone...`);
        await embedAndStoreDocs(pineconeClient, docs);
        console.log("Data embedded and stored in pine-cone index");
    } catch (error) {
        console.error("Init client script failed ", error);
    }
})();
