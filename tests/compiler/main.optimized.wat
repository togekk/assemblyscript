(module
 (type $iii (func (param i32 i32) (result i32)))
 (type $_ (func))
 (memory $0 0)
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $main/code (mut i32) (i32.const 0))
 (global $~started (mut i32) (i32.const 0))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "main" (func $main/main))
 (func $main/main (; 0 ;) (type $iii) (param $0 i32) (param $1 i32) (result i32)
  global.get $~started
  i32.eqz
  if
   i32.const 1
   global.set $main/code
   i32.const 1
   global.set $~started
  end
  global.get $main/code
 )
 (func $null (; 1 ;) (type $_)
  nop
 )
)
