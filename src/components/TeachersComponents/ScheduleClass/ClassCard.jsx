import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

export default function ClassCard({ classInfo, onReschedule }) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg">{classInfo.className}</h3>
          <p className="text-gray-600">{classInfo.subject}</p>
        </div>
        <Button
          onClick={() => onReschedule(classInfo)}
          style={{ backgroundColor: "#FF006B" }}
          className="hover:bg-[#D4005A]"
        >
          Reschedule
        </Button>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <CalendarIcon className="h-4 w-4" />
        <span>{format(classInfo.date, "PPP")}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Clock className="h-4 w-4" />
        <span>{`${classInfo.startTime} - ${classInfo.endTime}`}</span>
      </div>
      <p className="mt-2 text-sm text-gray-500">{classInfo.description}</p>
    </Card>
  );
}
