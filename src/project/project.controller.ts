import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import availableLocales from "../utils/availableLocales.ts";

const authorClient = new PrismaClient().project;

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const allProjects = (await authorClient.findMany()).map((project: any) => {
      return {
        ...project,
        locales: JSON.parse(project.locales)
      }
    })
    res.status(200).json({ data: allProjects });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

export const getSingleProject = async (req: Request, res: Response) => {
  const id = req.params.id

  if (isNaN(Number(id))) {
    res.status(400).json({ message: "ID must be a number" });
    return
  }

  try {
    const project = await authorClient.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!project) {
      res.status(404).json({ message: `Project with id: ${id} does not exist` });
    } else {
      res.status(200).json({
        data: {
          ...project,
          locales: JSON.parse(project.locales)
        }
      });
    }
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
}

export const createProject = async (req: { body: { entryId: number; locales: string; }; }, res: Response) => {
  const entryId = req.body.entryId;
  const status = "submitted"
  const locales = Object.values(req.body.locales).map((locale: string) => {
    return {
      code: locale,
      name: Object.values(availableLocales).find((r: any) => {
        return r.code === locale
      })?.name,
      status: "submitted"
    }
  })

  try {
    const project = await authorClient.create({
      data: {
        entryId,
        status,
        locales: JSON.stringify(locales)
      },
    });

    res.status(201).json({
      data: {
        ...project,
        locales: JSON.parse(project.locales)
      }
    });
  } catch (e: any) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};