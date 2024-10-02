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

export default function page() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>New Event</CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm />
        </CardContent>
      </Card>
    </div>
  );
}
