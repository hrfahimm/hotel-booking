'use client'

import { NextStudio } from "next-sanity/studio";
import React from "react";
import Config from "../../../../../sanity.config";

export default function Studio() {
    return <NextStudio config={Config} />
}
