import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EventForm from "@/components/forms/EventForm";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/drizzle/db";
import ScheduleForm from "@/components/forms/ScheduleForm";

export default async function SchedulePage() {
  const { userId, redirectToSignIn } = auth();
  if (userId == null) {
    return redirectToSignIn();
  }

  const schedule = await db.query.ScheduleTable.findFirst({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
    with: {
      availabilities: {
        orderBy: ({ startTime }, { desc }) => desc(startTime),
      },
    },
  });
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <ScheduleForm schedule={schedule} />
        </CardContent>
      </Card>
    </div>
  );
}
