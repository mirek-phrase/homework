import { Router, Request, Response } from 'express'
import { getAllProjects, createProject, getSingleProject } from "./project/project.controller.ts";
import {projectValidation} from "./project/projectValidation.ts";
import {getAllEntries, getSingleEntry} from "./entries/entry.controller.ts";
import availableLocales from "../src/utils/availableLocales.ts";
import entries from "./entries/entries.json";

const router = Router()

router.get('/locales', (req: Request, res: Response) => {
  res.status(200).json({ data: availableLocales });
})

router.get('/entries', getAllEntries)
router.get('/entries/:id', getSingleEntry)

router.get('/projects', getAllProjects)
router.post('/projects', projectValidation, createProject)
router.get('/projects/:id', getSingleProject)

export default router