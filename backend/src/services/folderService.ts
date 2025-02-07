import { FolderRepository } from "../repositories/folderRepository";

const folderRepo = new FolderRepository();

export class FolderService {
    async getAllFolders() {
        return folderRepo.getAll();
    }
}