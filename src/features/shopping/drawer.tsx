import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../components/ui/drawer';
import type { ReactNode } from 'react';
import { ShoppingListPanel } from './list-panel';

export function ShoppingDrawer({ children }: { children: ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="max-h-[88vh]">
        <div className="mx-auto w-full max-w-lg overflow-y-auto px-4 pb-8">
          <DrawerHeader className="px-0 text-left">
            <DrawerTitle>Lista de compras</DrawerTitle>
            <DrawerDescription>
              Marque o que já foi comprado e adicione o que faltar.
            </DrawerDescription>
          </DrawerHeader>
          <ShoppingListPanel />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
