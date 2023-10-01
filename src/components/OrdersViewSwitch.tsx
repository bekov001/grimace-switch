import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface OrderViewProps {
    callback: (id: number) => void
}

export default function OrdersViewSwitch({callback} : OrderViewProps) {
    const [alignment, setAlignment] = React.useState<string | null>('left');
    interface key {
        left: number;
        center: number;
        right: number
      }
    const data: key= {
        left: 0,
        center: 1,
        right: 2
    }
    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
        if (newAlignment){
            callback(data[newAlignment as keyof key])
        }
       
      setAlignment(newAlignment);
    };
  
    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="centered">
          <img src='data:image/svg+xml;base64,PHN2ZwogICAgICAgIHdpZHRoPSIxNCIKICAgICAgICBoZWlnaHQ9IjExIgogICAgICAgIHZpZXdCb3g9IjAgMCAxNCAxMSIKICAgICAgICBmaWxsPSJub25lIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKPgogICAgPHJlY3QgeD0iNyIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iMy40MDAwMiIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iNi42OTk5NSIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iMTAiIHdpZHRoPSI2LjQiIGhlaWdodD0iMSIgZmlsbD0iIzhEOTZBNiIgLz4KICAgIDxyZWN0IHdpZHRoPSI1IiBoZWlnaHQ9IjQuNSIgZmlsbD0iI0ZGNEE0OSIgLz4KICAgIDxyZWN0IHk9IjYuNSIgd2lkdGg9IjUiIGhlaWdodD0iNC41IiBmaWxsPSIjMjZDNDg3IiAvPgo8L3N2Zz4K' />
        </ToggleButton>
        <ToggleButton value="center" aria-label="left aligned">
          <img src='data:image/svg+xml;base64,PHN2ZwogICAgICAgIHdpZHRoPSIxNCIKICAgICAgICBoZWlnaHQ9IjExIgogICAgICAgIHZpZXdCb3g9IjAgMCAxNCAxMSIKICAgICAgICBmaWxsPSJub25lIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKPgogICAgPHJlY3QgeD0iNyIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iMy40MDAwMiIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iNi42OTk5NSIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iMTAiIHdpZHRoPSI2LjQiIGhlaWdodD0iMSIgZmlsbD0iIzhEOTZBNiIgLz4KICAgIDxyZWN0IHdpZHRoPSI1IiBoZWlnaHQ9IjExIiBmaWxsPSIjMjZDNDg3IiAvPgo8L3N2Zz4K' />
        </ToggleButton>
        
        <ToggleButton value="right" aria-label="centered">
          <img src='data:image/svg+xml;base64,PHN2ZwogICAgICAgIHdpZHRoPSIxNCIKICAgICAgICBoZWlnaHQ9IjExIgogICAgICAgIHZpZXdCb3g9IjAgMCAxNCAxMSIKICAgICAgICBmaWxsPSJub25lIgogICAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKPgogICAgPHJlY3QgeD0iNyIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iMy40MDAwMiIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iNi42OTk5NSIgd2lkdGg9IjYuNCIgaGVpZ2h0PSIxIiBmaWxsPSIjOEQ5NkE2IiAvPgogICAgPHJlY3QgeD0iNyIgeT0iMTAiIHdpZHRoPSI2LjQiIGhlaWdodD0iMSIgZmlsbD0iIzhEOTZBNiIgLz4KICAgIDxyZWN0IHdpZHRoPSI1IiBoZWlnaHQ9IjExIiBmaWxsPSIjRkY0QTQ5IiAvPgo8L3N2Zz4K' />
        </ToggleButton>

      </ToggleButtonGroup>
    );
}
