export function buildExecutionOrder(nodes: any[], links: any[]): any[] {
  const graph = new Map<string, string[]>(); // nodeId → [nextNodeIds]
  const inDegree = new Map<string, number>(); // nodeId → incoming links count

  nodes.forEach((node) => inDegree.set(node.id, 0));

  links.forEach((link) => {
    if (!graph.has(link.fromNodeId)) graph.set(link.fromNodeId, []);
    graph.get(link.fromNodeId)!.push(link.toNodeId);

    inDegree.set(link.toNodeId, (inDegree.get(link.toNodeId) || 0) + 1);
  });

  // Find nodes with zero in-degree (starting points)
  const queue = nodes.filter((n) => inDegree.get(n.id) === 0).map((n) => n.id);

  const sortedNodeIds: string[] = [];
  const visited = new Set<string>();

  while (queue.length) {
    const nodeId = queue.shift()!;
    if (visited.has(nodeId)) continue;
    visited.add(nodeId);
    sortedNodeIds.push(nodeId);

    const neighbors = graph.get(nodeId) || [];
    neighbors.forEach((neighborId) => {
      inDegree.set(neighborId, inDegree.get(neighborId)! - 1);
      if (inDegree.get(neighborId) === 0) {
        queue.push(neighborId);
      }
    });
  }

  // Map sorted IDs back to node objects
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  return sortedNodeIds.map((id) => nodeMap.get(id)!);
};
