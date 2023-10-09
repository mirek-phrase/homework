import { Response, NextFunction } from "express";
import availableLocales from "../utils/availableLocales.ts";

export const projectValidation = (req: { body: { entryId: number; locales: string; }; }, res: Response, next: NextFunction) => {
    const validateLocales = Object.values(req.body.locales).every((locale: any) => {
        return Object.values(availableLocales).some(r => {
            return r.code === locale
        })
    })

    if (!req.body.entryId) {
        res.status(400).send({
            message: "Entry ID is required",
        });
        return
    }

    if (req.body.entryId > 1000) {
        res.status(400).send({
            message: "Entry ID is invalid",
        });
        return
    }

    if (!req.body.locales) {
        res.status(400).send({
            message: "Locales are required",
        });
        return
    }

    if (!validateLocales) {
        res.status(400).send({
            message: "Invalid locales",
        });
        return
    }
    next();
}