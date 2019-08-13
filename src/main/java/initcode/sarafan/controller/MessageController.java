package initcode.sarafan.controller;

import initcode.sarafan.domain.Message;
import initcode.sarafan.repo.MessageRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("message")

public class MessageController {
    private final MessageRepo MessageRepo;

    @Autowired
    public MessageController(initcode.sarafan.repo.MessageRepo messageRepo) {
        MessageRepo = messageRepo;
    }

    @GetMapping
    public List<Message> list() {
        return MessageRepo.findAll();
    }

    @GetMapping("{id}")
    public Message getOne(@PathVariable("id") Message message) {
        return message;
    }

    @PostMapping
    public Message create(@RequestBody Message message) {
        return MessageRepo.save(message);
    }

    @PutMapping("{id}")
    public Message update(
            @PathVariable("id") Message messageFromDb,
            @RequestBody Message message) {
        BeanUtils.copyProperties(message, messageFromDb, "id");

        return MessageRepo.save(messageFromDb);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Message message) {
        MessageRepo.delete(message);
    }
}
