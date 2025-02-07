import db from "../config/database";

export class FolderRepository {
    async getAll() {
        try {
            // return await db.$queryRaw`SELECT * FROM public."Folder";`;
            return await db.folder.findMany();
        } catch(e) {
            console.log(`Error getting all folders: ${e}`);
        }
    }
}