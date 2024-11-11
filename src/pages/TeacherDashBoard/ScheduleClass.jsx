import React, { useState } from "react";
import Layout from "./Layout";
import DynamicBreadcrumb from "@/components/TeachersComponents/Breadcrumbs/Breadcrumb";
import { breadcrumbItems } from "@/components/TeachersComponents/ScheduleClass/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useClassContext } from "@/components/TeachersComponents/ScheduleClass/ClassContext";
import ClassCard from "@/components/TeachersComponents/ScheduleClass/ClassCard";
import RescheduleModal from "@/components/TeachersComponents/ScheduleClass/RescheduleModal";
import NewClassForm from "@/components/TeachersComponents/ScheduleClass/NewClassForm";

function ScheduleClass() {
  const { scheduledClasses } = useClassContext();
  const [selectedClass, setSelectedClass] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReschedule = (classInfo) => {
    setSelectedClass(classInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
  };

  return (
    <Layout>
      <div className="mb-3">
        <DynamicBreadcrumb items={breadcrumbItems} />
      </div>

      <div className="container mx-auto py-6">
        <Tabs defaultValue="scheduled" className="w-full space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
            <TabsTrigger
              value="scheduled"
              className="data-[state=active]:bg-[#FF006B] data-[state=active]:text-white"
            >
              Scheduled Classes
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="data-[state=active]:bg-[#FF006B] data-[state=active]:text-white"
            >
              Schedule New Class
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scheduled" className="space-y-6">
            {scheduledClasses.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600">
                  No Classes Scheduled
                </h3>
                <p className="text-gray-500 mt-2">
                  Click on "Schedule New Class" to add your first class
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scheduledClasses.map((classInfo) => (
                  <ClassCard
                    key={classInfo.id}
                    classInfo={classInfo}
                    onReschedule={handleReschedule}
                  />
                ))}
              </div>
            )}

            <RescheduleModal
              isOpen={isModalOpen}
              classInfo={selectedClass}
              onClose={closeModal}
            />
          </TabsContent>

          <TabsContent value="new">
            <div className="max-w-4xl mx-auto">
              <NewClassForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

export default ScheduleClass;
