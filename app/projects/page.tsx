"use client";

import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Link } from "@heroui/react";

import { title } from "@/components/primitives";

export default function ProjectsPage() {

  return (
    <div className="flex flex-col gap-8">
      <h1 className={title()}>Projectos</h1>
      <Table
        hideHeader
        aria-label="Example static collection table"
        isStriped={true}
      >
        <TableHeader>
          <TableColumn>DATE</TableColumn>
          <TableColumn>SONG NAME</TableColumn>
          <TableColumn>AUTHOR</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className=" text-success-500">
            <TableCell>2024</TableCell>
            <TableCell> <Button as={Link} href={'https://www.youtube.com/watch?v=GvUWDPo7rY0'} isExternal={true} variant={"light"} color={"success"} className={"w-full"}>Luna</Button></TableCell>
            <TableCell>Pablo Marte</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>2025</TableCell>
            <TableCell>Estelas de colores</TableCell>
            <TableCell>Pablo Marte</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>2025</TableCell>
            <TableCell>Quisiera</TableCell>
            <TableCell>Pablo Marte</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>2025</TableCell>
            <TableCell>Oxitocina</TableCell>
            <TableCell>Pablo Marte</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className={title()}>Tour</h2>
      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn>FECHA</TableColumn>
          <TableColumn>CIUDAD</TableColumn>
          <TableColumn>BOLETOS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"PRÓXIMAMENTE"}>{[]}</TableBody>
      </Table>
    </div>
  );
}
