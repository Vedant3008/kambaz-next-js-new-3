"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { BsGripVertical } from "react-icons/bs";
import * as client from "../../client";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { editModule, updateModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const params = useParams();
  const cid = params.cid as string; 
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    if (!cid) return;
    const modules = await client.findModulesForCourse(cid);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);
  
  // CREATE - Connected to server
  const onCreateModuleForCourse = async () => {
    if (!cid || !moduleName) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid, newModule);
    dispatch(setModules([...modules, module]));
    setModuleName("");
  };

  // DELETE - Connected to server
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  // UPDATE - Connected to server
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => 
      m._id === module._id ? module : m
    );
    dispatch(setModules(newModules));
  };
  
  return (
    <div className="wd-modules">
      {/* Only show controls for Faculty */}
      {currentUser?.role === "FACULTY" && (
        <ModulesControls 
          moduleName={moduleName} 
          setModuleName={setModuleName}
          addModule={onCreateModuleForCourse} // Use server function
        />
      )}
      
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem 
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && currentUser?.role === "FACULTY" && (
                  <FormControl 
                    className="w-50 d-inline-block"
                    value={module.name}
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onUpdateModule({ ...module, editing: false }); // Save to server
                      }
                    }}
                  />
                )}
                
                {/* Only show control buttons for Faculty */}
                {currentUser?.role === "FACULTY" && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={onRemoveModule} // Use server function
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>
              
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem 
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
  
