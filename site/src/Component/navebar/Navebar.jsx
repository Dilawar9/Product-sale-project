
import React from "react";
import { Link, Outlet } from 'react-router-dom'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function Navebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div className="grid cols-1">
        <div className="">
          <Card className="h-[calc(120vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="blue">
                Inventory Products
              </Typography>
            </div>
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                    <ListItemPrefix>
                      <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      Dashboard
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      {/* <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix> */}
                      <Link to='/'>
                        Home
                      </Link>
                    </ListItem>
                    <ListItem>
                      {/* <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix> */}
                      <Link to='/sales'>
                        Sales
                      </Link>
                    </ListItem>
                    <ListItem>
                      {/* <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix> */}
                      <Link to='/report'>
                        Report
                      </Link>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                    <ListItemPrefix>
                      <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      E-Commerce
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0">
                    <ListItem>
                      {/* <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix> */}
                      <Link to='/order'>
                        Order
                      </Link>
                    </ListItem>
                    <ListItem>
                      {/* <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix> */}
                      <Link to='/category'>
                        Main-Category
                      </Link>
                    </ListItem>
                    <ListItem>
                      {/* <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix> */}
                      <Link to='/subcategory'>
                        Sub-Category
                      </Link>
                    </ListItem>
                    <ListItem>
                      {/* <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix> */}
                      <Link to='/products'>
                        Product
                      </Link>
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <hr className="my-2 border-blue-gray-50" />
              <ListItem>
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Link to='/oreritem'>
                  Order Items
                </Link>
                <ListItemSuffix>
                  <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                </ListItemSuffix>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                {/* <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix> */}
                <Link to='/signup'>
                  Signup
                </Link>
              </ListItem>
              <ListItem>
                {/* <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix> */}
                <Link to='/login'>
                  Login
                </Link>
              </ListItem>
              <ListItem>
                {/* <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix> */}
                <Link to="/logout">
                Log Out
                </Link>
              </ListItem>
            </List>
          </Card>
        </div>
        
      </div>


    </>
  )
}

export default Navebar;