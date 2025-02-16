"use client";


import React, { useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Form } from 'react-hook-form';


const CreateAccountDrawer = ({children}) => {
const [open, setOpen]= useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild >{children}</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
    
    </DrawerHeader>
    <div>
        
    </div>
  </DrawerContent>
</Drawer>

  )
}

export default CreateAccountDrawer