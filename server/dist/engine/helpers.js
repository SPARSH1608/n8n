export function buildExecutionOrder(nodes, links) {
    const graph = new Map(); // nodeId → [nextNodeIds]
    const inDegree = new Map(); // nodeId → incoming links count
    nodes.forEach((node) => inDegree.set(node.id, 0));
    links.forEach((link) => {
        if (!graph.has(link.fromNodeId))
            graph.set(link.fromNodeId, []);
        graph.get(link.fromNodeId).push(link.toNodeId);
        inDegree.set(link.toNodeId, (inDegree.get(link.toNodeId) || 0) + 1);
    });
    // Find nodes with zero in-degree (starting points)
    const queue = nodes.filter((n) => inDegree.get(n.id) === 0).map((n) => n.id);
    const sortedNodeIds = [];
    const visited = new Set();
    while (queue.length) {
        const nodeId = queue.shift();
        if (visited.has(nodeId))
            continue;
        visited.add(nodeId);
        sortedNodeIds.push(nodeId);
        const neighbors = graph.get(nodeId) || [];
        neighbors.forEach((neighborId) => {
            inDegree.set(neighborId, inDegree.get(neighborId) - 1);
            if (inDegree.get(neighborId) === 0) {
                queue.push(neighborId);
            }
        });
    }
    // Map sorted IDs back to node objects
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));
    return sortedNodeIds.map((id) => nodeMap.get(id));
}
;
//# sourceMappingURL=helpers.js.map