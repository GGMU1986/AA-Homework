  class Stack
    def initialize()
      # create ivar to store stack here!
        @arr = []
    end

    def push(el)
      # adds an element to the stack
      @arr << el
    end

    def pop
      # removes one element from the stack
        @arr.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      @arr.first
    end
  end

  class Queue
      def initialize
        @arr = []
      end

      def enqueue(el)
        @arr << el
      end

      def dequeue
        @arr.shift
      end

      def peek
        @arr.first
      end
  end

  class Map
      def initialize
         @map = [] 
      end

      def set(key, value)
        @map.each do |pair|
            if pair[0] == key  
                pair[1] = value
            end
        end            
        @map << [key, value]
      end

      def get(key)
        @map.flatten.each do |ele|
            return key if ele == key
        end
      end

      def delete(key)
        @map.each_with_index do |pair, i|
            if pair[0] == key
                return @map[0...i] + @map[i + 1..-1]
            end
        end
        @map
      end

      def show
        @map
      end
  end