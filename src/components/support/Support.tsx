import {
  AlertDialog,
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
import { HeartHandshake } from "lucide-react"

const orgs = [
  {
    label: "Bronx Defenders",
    url: "https://www.bronxdefenders.org/",
    key: "bronx-defenders"
  },
  { label: "Bronx Documentary Center", url: "https://www.bronxdoc.org/", key: "bronx-documentary-center" },
  { label: "City Harvest", url: "https://www.cityharvest.org/", key: "city-harvest" },
  { label: "Make the Road NY", url: "https://maketheroadny.org/", key: "make-the-road-ny"},
  { label: "New York Immigrant Coalition", url: "https://www.nyic.org/", key: "new-york-immigrant-coalition" },
  { label: "Think!Chinatown", url: "https://www.thinkchinatown.org/", key: "think-chinatown" },
];

export const Support = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => {
      return !prevToggle;
    });
  };
  return (
    <AlertDialog open={toggle}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="hover:cursor-pointer flex flex-row items-center" onClick={handleToggle}>
          Support <HeartHandshake color="#E23B1D"/>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-row gap-2 items-center">Support <HeartHandshake color="#E23B1D"/></AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <Card>
          <CardContent className="leading-7 flex flex-col gap-4">
            <p>Consider supporting these local organizations:</p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {orgs.map((org) => {
                return (
                  <li key={org.key}>
                    <a href={org.url} rel="noopener" target="_blank" className="underline hover:cursor-pointer">
                      {org.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
        <AlertDialogFooter>
          <AlertDialogCancel  onClick={handleToggle}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
