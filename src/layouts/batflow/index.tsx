import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Grid, Draggable } from 'react-dnd-grid';

const BatFlow = () => {
 const [grid, setGrid] = useState([
   { id: 1, x: 0, y: 0 },
   { id: 2, x: 1, y: 0 },
   { id: 3, x: 2, y: 0 },
   { id: 4, x: 0, y: 1 },
   { id: 5, x: 1, y: 1 },
   { id: 6, x: 2, y: 1 },
 ]);

 const handleDrag = useDrag(() => ({
   type: 'grid',
   item: grid[0],
   collect: (monitor) => ({
     items: grid,
     item: monitor.getItem(),
     collector: monitor.collector,
   }),
 }));

 return (
   <div>
     <Grid grid={grid} onDrag={handleDrag}>
       <Draggable>
         <div>
           <div>1</div>
         </div>
       </Draggable>
       <Draggable>
         <div>
           <div>2</div>
         </div>
       </Draggable>
       <Draggable>
         <div>
           <div>3</div>
         </div>
       </Draggable>
       <Draggable>
         <div>
           <div>4</div>
         </div>
       </Draggable>
       <Draggable>
         <div>
           <div>5</div>
         </div>
       </Draggable>
       <Draggable>
         <div>
           <div>6</div>
         </div>
       </Draggable>
     </Grid>
   </div>
 );
};

export default BatFlow;