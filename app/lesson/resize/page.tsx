"use client";

import { Edge, Node, ReactFlow, useNodesState } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ResizableNode from "./_components/resizable_node";
import selected_resizable_node from "./_components/selected_resizable_node";

// 初期ノード
const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "node 1" },
    type: "resizableNode",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "node 2" },
    type: "selectedResizableNode",
  },
];

// 初期エッジ
const initialEdges: Edge[] = [];

// 独自のノードタイプ
const nodeTypes = {
  resizableNode: ResizableNode,
  selectedResizableNode: selected_resizable_node,
};

export default function ResizeLessonPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        nodes={nodes}
        edges={initialEdges}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}
