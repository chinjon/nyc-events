import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AboutProject = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => {
      return !prevToggle;
    });
  };
  return (
    <AlertDialog open={toggle}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="hover:cursor-pointer" onClick={handleToggle}>
          About
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>About this project</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <Card>
          <CardContent className="leading-7 flex flex-col gap-4">
            <p>
              This project was inspired to fix the previous iteration of the{" "}
              <a
                href="https://www.nyc.gov/main/events"
                rel="noopener"
                target="_blank"
                className="underline"
              >
                official NYC events page
              </a> and be a resource for local photographers as a quick reference for what parades are happening.
            </p>
            <p>
              <a
                href="https://data.cityofnewyork.us/City-Government/NYC-Permitted-Event-Information/tvpp-9vvx/about_data"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                NYC's permitted events dataset
              </a>{" "}
              is leveraged and filtered for events that are tagged as "parade"
              for the next month.
            </p>
            <p>
              This project is maintained by{" "}
              <a
                href="https://github.com/chinjon"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                jonathan chin
              </a>. No AI-generated code is leveraged in this project.
            </p>
          </CardContent>
        </Card>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:cursor-pointer" onClick={handleToggle}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
