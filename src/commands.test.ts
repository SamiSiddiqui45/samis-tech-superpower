import { describe, expect, it } from 'vitest';
import { commandNames, executeCommand } from './commands';
describe('command center',()=>{
 it.each(commandNames.filter(c=>c!=='clear'))('%s has meaningful output',command=>{expect(executeCommand(command).length).toBeGreaterThan(25);expect(executeCommand(command)).not.toContain('Command not found');});
 it('normalizes whitespace and case',()=>expect(executeCommand('  ABOUT  ')).toBe(executeCommand('about')));
 it('clears output',()=>expect(executeCommand('clear')).toBe(''));
 it('handles unknown commands',()=>expect(executeCommand('sudo')).toContain('Command not found: sudo'));
 it('reveals the Easter egg',()=>expect(executeCommand('superpower')).toContain('Superpower unlocked'));
 it('links to the verified hosting target',()=>expect(executeCommand('aws')).toContain('https://main.d2p2c6exggp4f1.amplifyapp.com'));
});
