"use client";

import { Handle, Node, NodeProps, NodeResizer, Position } from "@xyflow/react";
import { memo } from "react";

type SelectedResizableNodeData = Node<{
  label: string;
}>;

/// ノード選択時にリサイズ機能が表示されるノードコンポーネント
const SelectedResizableNode = ({ data, selected }: NodeProps<SelectedResizableNodeData>) => {
  return (
    <>
      {/* ↓↓リサイズ機能を有効化する↓↓ */}
      <NodeResizer minWidth={100} minHeight={30} isVisible={selected} />
      <div className="flex justify-center items-center px-4 py-1 bg-blue-100 w-full h-full">
        <div>{data.label}</div>
      </div>
      <Handle type="source" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(SelectedResizableNode);
