import {
  Box,
  Grid,
  GridItem,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import DesktopSubNav from "./DesktopSubNav";

const service = [
  {
    label: "Resume Writing",
    href:"/resume",
    children: [
      {
        label: "Text Resume",
        href:"/resume",
      },
      {
        label: "Visual Resume",
        href:"/resume",
      },
      {
        label: "Resume Quality Score",
        sublabel: "Free",
        href:"/resume",
      },
      {
        label: "Resume Sample",
        href:"/resume",
      },
    ],
  },
  {
    label: "Jobs For You",
    children: [
      {
        label: "Jobs4U",
        href: "#",
      },
    ],
  },
  {
    label: "Recruiter Reach",
    children: [
      {
        label: "Resume Dispay",
        href: "#",
      },
      {
        label: "Priority Applicant",
        href: "#",
      },
      {
        label: "Recruiter Connection",
        href: "#",
      },
      {
        label: "Job Search Booster",
        href: "#",
      },
    ],
  },
  {
    label: "Other",
    children: [
      {
        label: "Help/FAQ",
        href: "#",
      },
      {
        label: "Carrier Advice",
        href: "#",
      },
      {
        label: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    label: "Monthly Subscriptions",
    children: [
      {
        label: "Basic & Premium Plans",
        href: "/subscription"
      },
    ],
  },
  {
    label: "Courese/Certifications",
    children: [
      {
        label: "Data Science",
        href: "#",
      },
      {
        label: "Machine Learning",
        href: "#",
      },
      {
        label: "Big Data",
        href: "#",
      },
      {
        label: "Programming",
        href: "#",
      },
      // {
      //   label: "Business Analyst",
      //   href: "#",
      // },
      // {
      //   label: "Project Management",
      //   href: "#",
      // },
      {
        label: "Web Design",
        href: "#",
      },
      {
        label: "DevOps and Clod Computing",
        href: "#",
      },
      {
        label: "Marketing",
        href: "#",
      },
      {
        label: "Accounting and Finance",
        href: "#",
      },
      {
        label: "Banking",
        href: "#",
      },
      {
        label: "Logistics and Supply Chain",
        href: "#",
      },
      {
        label: "Strategy and Leadership",
        href: "#",
      },
    ],
  },
];

// const serviceData = () =>{
//   return service
// }
const Services = () => {
  return (
    <Box w="100px" h="30px" _hover={{ borderBottom: "3px solid #006cb7" }}>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            href={"#"}
            fontSize={"13px"}
            fontWeight={500}
            color={"gray.500"}
            _hover={{
              textDecoration: "none",
              color: "#006cb7",
              align: "center",
            }}
          >
            SERVICES
          </Link>
        </PopoverTrigger>
        <PopoverContent fontSize="13px" w="590px" h="450px" bg="#f5f5f5">
          <Grid
            templateColumns="repeat(3, 1fr)"
            // templateRows="250px 1fr 50px"
            // w="50px"
            h="400px"
            gap='-14'
            flexWrap="wrap"
            p={6}
          >
            {service.map((child) => {
              return (
                <GridItem w='max-content' h='max-content'>
                  <Text fontSize="12px" fontWeight={800}>
                    {child.label}
                  </Text>
                  <Stack alignItems="stretch" spacing={-3}>
                    {child.children.map((item) => {
                      return <DesktopSubNav key={item.label} {...item} />;
                    })}
                  </Stack>
                </GridItem>
              );
            })}
          </Grid>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default Services;
