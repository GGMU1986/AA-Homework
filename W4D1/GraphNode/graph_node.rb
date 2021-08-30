
class GraphNode
    attr_reader :value, :neighbors
    def initialize(value)
        @value = value
        @neighbors = []
    end
end

def bfs(starting_node, target_node, visited = Set.new())
    queue = []
    queue << starting_node
    # debugger
    until queue.empty?
        ele = queue.shift
        if visited.include?(ele)
        return ele if ele.value == target_node
        visited.add(ele.value)
        queue += ele.neighbors
    end
    nil
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]




