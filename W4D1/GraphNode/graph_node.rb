require "byebug"

class GraphNode
    attr_reader :value, :neighbors
    def initialize(value)
        @value = value
        @neighbors = []
    end

    def add_neighbor(*nodes)
        @neighbors.push(nodes)
    end

    def inspect
        {
            @neighbors.map { |n| n.value }
    }.inspect
    end

end

def bfs(starting_node, target_node)
    queue = [starting_node]
    # debugger
    until queue.empty?
        ele = queue.shift
        return ele if ele.value == target_node
        queue + ele.neighbors
    end
    nil
end

a = GraphNode.new(:a)
b = GraphNode.new(:b)
c = GraphNode.new(:c)
d = GraphNode.new(:d)
e = GraphNode.new(:e)
f = GraphNode.new(:f)

a.add_neighbor(b, c, e)
c.add_neighbor(b, d)
e.add_neighbor(a)
f.add_neighbor(e)

p a
# p b
# p c
# p d
# p e
# p f

# p bfs(a, :b)