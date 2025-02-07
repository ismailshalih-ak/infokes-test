import { Elysia } from "elysia";
import { FolderService } from "../services/folderService";

const folderService = new FolderService();

const folderController = new Elysia({prefix: "/folders"})
    .get("/", () => folderService.getAllFolders())
    // .get("/:id", () => "get folder by id")
    // .post("/", () => "create folder")
    // .patch("/:id", () => "update folder")
    // .delete("/:id", () => "delete folder")

export default folderController;