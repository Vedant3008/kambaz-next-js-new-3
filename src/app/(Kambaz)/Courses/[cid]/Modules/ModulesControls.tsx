import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap d-flex justify-content-end mb-3">
      {/* Order: Collapse All, View Progress, Publish All, Module */}
      
      <Button variant="secondary" className="me-2" id="wd-collapse-all">
        Collapse All
      </Button>
      
      <Button variant="secondary" className="me-2" id="wd-view-progress">
        View Progress
      </Button>
      
      <Dropdown className="me-2 d-inline-block" >
        <DropdownToggle variant="secondary" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </DropdownItem>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
      <Button variant="danger" id="wd-add-module-btn">
        <FaPlus className="me-1" />
        Module
      </Button>
    </div>
  );
}