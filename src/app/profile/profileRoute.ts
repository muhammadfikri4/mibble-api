import { Router } from "express";
import { VerifyToken } from "middleware/verifyToken";
import { CatchWrapper } from "utils/CatchWrapper";
import { getProfileController } from "./profileController";

const route = Router()

route.get('/', VerifyToken, CatchWrapper(getProfileController))

export default route