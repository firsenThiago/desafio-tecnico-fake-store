import axios from "axios";
import { URL } from "@/config";

export const api = axios.create({ baseURL: URL });
