"use client";

import { Handle, Node, NodeProps, NodeResizer, Position } from "@xyflow/react";
import { memo } from "react";

type ResizableNodeData = Node<{
  label: string;
}>;

/// 常時リサイズ機能が表示されるノードコンポーネント
const ResizableNode = ({ data }: NodeProps<ResizableNodeData>) => {
  return (
    <>
      {/* ↓↓リサイズ機能を有効化する↓↓ */}
      <NodeResizer minWidth={100} minHeight={30} />
      <div className="flex justify-center items-center px-4 py-1 bg-red-100 w-full h-full">
        <div>{data.label}</div>
      </div>
      <Handle type="source" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(ResizableNode);
